-- Create Users Table
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM('student', 'admin') DEFAULT 'student', -- Define if the user is a student or admin
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Projects Table
CREATE TABLE projects (
    project_id INT AUTO_INCREMENT PRIMARY KEY,
    team_lead_name VARCHAR(100) NOT NULL,
    team_size INT NOT NULL,
    project_title VARCHAR(200) NOT NULL,
    domain VARCHAR(100) NOT NULL,
    special_lab VARCHAR(100) NOT NULL,
    flowchart_path VARCHAR(255) NOT NULL, -- Path to the uploaded JPEG/PNG files
    abstract_path VARCHAR(255) NOT NULL,  -- Path to the uploaded PDF file
    bom_submission_path VARCHAR(255) NOT NULL,  -- Path to the uploaded BOM file
    user_id INT,  -- Foreign key from the 'users' table
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

-- Create Queries Table
CREATE TABLE queries (
    query_id INT AUTO_INCREMENT PRIMARY KEY,
    subject VARCHAR(255) NOT NULL,
    problem TEXT NOT NULL,
    user_id INT,  -- Foreign key from the 'users' table
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

-- Create Registrations Table
CREATE TABLE registrations (
    registration_id INT AUTO_INCREMENT PRIMARY KEY,
    project_id INT,  -- Foreign key from the 'projects' table
    user_id INT,  -- Foreign key from the 'users' table
    registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (project_id) REFERENCES projects(project_id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

-- Create Admin View for Admin Logins
CREATE VIEW admin_users AS
SELECT user_id, name, email 
FROM users 
WHERE role = 'admin';

-- Insert Example Data

-- Insert a Student User
INSERT INTO users (name, email, password, role) 
VALUES ('John Doe', 'john.doe@college.edu', 'hashed_password', 'student');

-- Insert an Admin User
INSERT INTO users (name, email, password, role) 
VALUES ('Admin User', 'admin@college.edu', 'hashed_password', 'admin');

-- Insert a Project Example
INSERT INTO projects (team_lead_name, team_size, project_title, domain, special_lab, flowchart_path, abstract_path, bom_submission_path, user_id)
VALUES ('John Doe', 5, 'AI in Healthcare', 'Software', 'VI Lab', '/uploads/flowchart1.png', '/uploads/abstract1.pdf', '/uploads/bom1.xlsx', 1);

-- Insert a Query Example
INSERT INTO queries (subject, problem, user_id)
VALUES ('Issue with Submission', 'Cannot upload my abstract file', 1);

-- Insert a Registration Example
INSERT INTO registrations (project_id, user_id)
VALUES (1, 1);
