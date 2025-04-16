require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { neon } = require("@neondatabase/serverless");

const app = express();
const sql = neon(process.env.DATABASE_URL);

// Enable CORS for all routes
app.use(cors({
  origin: 'http://localhost:5173', // Allow your React dev server
  credentials: true
}));

// Increase payload size limit
app.use(express.json({ limit: '50mb' }));

// Create projects table if it doesn't exist
const initDatabase = async () => {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS projects (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        category VARCHAR(50) NOT NULL,
        description TEXT NOT NULL,
        
        -- Website Projects specific fields
        website_url TEXT,
        
        -- Digital Campaign specific fields
        campaign_goal TEXT,
        strategy_overview TEXT,
        platforms_used TEXT[],
        campaign_link TEXT,
        
        -- Graphic Design specific fields
        design_type VARCHAR(100),
        client_name TEXT,
        project_outcome TEXT,
        
        -- Video Editing specific fields
        video_purpose VARCHAR(100),
        client_organization TEXT,
        video_link TEXT,
        key_results TEXT,
        
        -- Common fields
        technologies TEXT[],
        results_achieved TEXT,
        image_url TEXT NOT NULL,
        github_url TEXT,
        completion_date TIMESTAMP NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
    console.log("Database initialized successfully");
  } catch (error) {
    console.error("Database initialization error:", error);
    throw error;
  }
};

// Add request logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Get all projects
app.get("/api/projects", async (req, res) => {
  try {
    const projects = await sql`
      SELECT * FROM projects ORDER BY created_at DESC
    `;
    res.json(projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    res.status(500).json({ error: "Failed to fetch projects", details: error.message });
  }
});

// Add new project
app.post("/api/projects", async (req, res) => {
  try {
    console.log("Received project data:", req.body);

    const {
      // Common fields
      title,
      category,
      description,
      technologies,
      resultsAchieved,
      imageUrl,
      githubUrl,
      completionDate,

      // Website specific
      websiteUrl,

      // Digital Campaign specific
      campaignGoal,
      strategyOverview,
      platformsUsed,
      campaignLink,

      // Graphic Design specific
      designType,
      clientName,
      projectOutcome,

      // Video Editing specific
      videoPurpose,
      clientOrganization,
      videoLink,
      keyResults
    } = req.body;

    // Validate required fields
    if (!title || !category || !description || !imageUrl) {
      return res.status(400).json({
        error: "Missing required fields",
        required: ["title", "category", "description", "imageUrl"]
      });
    }

    const project = await sql`
      INSERT INTO projects (
        title,
        category,
        description,
        technologies,
        results_achieved,
        image_url,
        github_url,
        completion_date,
        
        website_url,
        campaign_goal,
        strategy_overview,
        platforms_used,
        campaign_link,
        design_type,
        client_name,
        project_outcome,
        video_purpose,
        client_organization,
        video_link,
        key_results
      ) VALUES (
        ${title},
        ${category},
        ${description},
        ${technologies},
        ${resultsAchieved || null},
        ${imageUrl},
        ${githubUrl || null},
        ${new Date(completionDate)},
        
        ${websiteUrl || null},
        ${campaignGoal || null},
        ${strategyOverview || null},
        ${platformsUsed || null},
        ${campaignLink || null},
        ${designType || null},
        ${clientName || null},
        ${projectOutcome || null},
        ${videoPurpose || null},
        ${clientOrganization || null},
        ${videoLink || null},
        ${keyResults || null}
      ) RETURNING *
    `;

    console.log("Project created successfully:", project[0]);
    res.status(201).json(project[0]);
  } catch (error) {
    console.error("Error creating project:", error);
    res.status(500).json({ 
      error: "Failed to create project", 
      details: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
});

// Get projects by category
app.get("/api/projects/category/:category", async (req, res) => {
  try {
    const { category } = req.params;
    const projects = await sql`
      SELECT * FROM projects 
      WHERE category = ${category}
      ORDER BY created_at DESC
    `;
    res.json(projects);
  } catch (error) {
    console.error("Error fetching projects by category:", error);
    res.status(500).json({ error: "Failed to fetch projects", details: error.message });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: "Internal Server Error", 
    message: err.message,
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
});

const PORT = process.env.PORT || 3000;

initDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to initialize database:", error);
    process.exit(1);
  });