# Blog Backend

## Prerequisites
- Node.js (v16+)
- PostgreSQL

## Local Setup
1. Clone the repository
2. Copy `.env.example` to `.env`
3. Fill in environment variables
4. `npm install`
5. `npm run dev`

## Deployment on Render
1. Create a new Web Service
2. Connect your GitHub repository
3. Select Node.js environment
4. Set environment variables in Render dashboard
5. Deploy

## Environment Variables
- `PORT`: Server port
- `DATABASE_URL`: PostgreSQL connection string
- `NODE_ENV`: Application environment

## API Endpoints
- `/api/health`: Health check endpoint