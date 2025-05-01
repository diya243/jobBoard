# Job Board Website

A modern job board platform where employers can post job openings and job seekers can search and apply for jobs.

## Features

- **Job Listings:** Browse and search for available job opportunities
- **Search & Filters:** Filter jobs based on category, location, job type, etc.
- **User Authentication:** Separate login for job seekers and employers
- **Job Applications:** Apply to jobs directly through the platform
- **Job Posting:** Employers can create and manage job listings
- **Dashboard:** User dashboards for both job seekers and employers

## Technologies Used

- React.js
- React Router
- Tailwind CSS
- Heroicons

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/job-board.git
   cd job-board
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/          # Page components
│   ├── Home.js     # Landing page
│   ├── Jobs.js     # Job listings page
│   ├── JobDetail.js # Job details page
│   ├── Login.js    # Login page
│   ├── Register.js # Registration page
│   ├── Dashboard.js # User dashboard
│   ├── PostJob.js  # Create job listing page
│   └── NotFound.js # 404 page
├── App.js          # Main component with routes
└── index.js        # Entry point
```

## Deployment

This project can be built for production using:

```
npm run build
```

This will create an optimized production build in the `build` folder.

## Future Enhancements

- Implement backend API integration
- Add resume upload functionality
- Implement application tracking system
- Add email notifications
- Integrate payment system for premium job listings

## License

MIT
