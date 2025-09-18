#!/bin/bash

echo "Starting EquiTrade applications..."

# Start backend
echo "Starting backend on port 3002..."
cd backend && npm start &

# Start dashboard on port 3000
echo "Starting dashboard on port 3000..."
cd ../dashboard && npm start &

# Start frontend on port 3001
echo "Starting frontend on port 3001..."
cd ../frontend && npm start &

echo "All applications started!"
echo "Frontend: http://localhost:3001"
echo "Dashboard: http://localhost:3000"
echo "Backend: http://localhost:3002"

wait