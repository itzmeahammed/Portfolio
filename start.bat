@echo off
echo ========================================
echo   3D ANIMATED PORTFOLIO - SETUP
echo ========================================
echo.
echo Fixing version compatibility...
echo.
call npm install --legacy-peer-deps
echo.
echo ========================================
echo   Starting Development Server...
echo ========================================
echo.
call npm run dev
pause
