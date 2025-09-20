# FinancialOverview

A comprehensive financial management system with advanced features beyond traditional spreadsheet capabilities.

## Overview
This application helps users manage their personal finances through an intuitive web interface. It combines the familiar aspects of financial tracking with advanced features like profile management, automated notifications, and stock planning.

## Project Structure
```
src/
  ├── web/           # Frontend TypeScript code
  │   ├── public/    # Static assets
  │   └── index.ts   # Main entry point
  └── server/        # Python backend server
      └── server.py  # Development server

dist/                # Compiled frontend code
```

## Planned Features

### Profile System
- Password management
- Login system
- Registration system
- Permission system (for future feature integration)

### Financial Management
- Monthly/yearly income and outgoing tracking
- Initial income setup during registration
- Static outgoings management (recurring payments)
- Dynamic transaction tracking (purchases, dividends)
- File import support for transactions

### Stock Planning
- Stock portfolio management
- Investment tracking
- (Potentially separate project in future)

### Money Manager
- Statistics based on available funds
- Income-outgoing analysis
- Financial projections

### Bill Manager
- Bill tracking and management
- Payment due notifications
- Bill import functionality

## Development Setup

### Prerequisites
1. [Node.js](https://nodejs.org/) (v18 or higher recommended)
2. [Python](https://www.python.org/) (v3.8 or higher)
3. npm (comes with Node.js)

### Initial Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/MoneyDiver/FinancialOverview.git
   cd FinancialOverview
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create Python virtual environment:
   ```bash
   python -m venv venv
   ```

4. Activate virtual environment:
   - Windows:
     ```bash
     .\venv\Scripts\activate
     ```
   - Unix/MacOS:
     ```bash
     source venv/bin/activate
     ```

### Development Workflow

1. Start the frontend development environment (in one terminal):
   ```bash
   npm run watch
   ```
   This will:
   - Watch for changes in TypeScript files
   - Recompile automatically
   - Generate source maps for debugging

2. Start the development server (in another terminal):
   ```bash
   npm run server
   ```
   This will:
   - Serve the compiled frontend files
   - Handle API requests
   - Available at http://localhost:8000

### Build for Production
```bash
npm run build
```

## Technology Stack
- **Frontend**:
  - TypeScript
  - Webpack for bundling
  - Source maps for debugging
- **Backend**:
  - Python
  - Simple HTTP server (development)

## Contributing
1. Create a new branch for your feature
2. Make your changes
3. Submit a pull request