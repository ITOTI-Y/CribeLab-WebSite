set -e

export NVM_DIR="$HOME/.nvm"
if [ -s "$NVM_DIR/nvm.sh" ]; then
  . "$NVM_DIR/nvm.sh"
  echo "✅ NVM loaded."
else
  echo "❌ NVM not found. Exiting."
  exit 1
fi

export BUN_INSTALL="$HOME/.bun"
if [ -d "$BUN_INSTALL" ]; then
  export PATH="$BUN_INSTALL/bin:$PATH"
  echo "✅ Bun PATH configured."
else
  echo "❌ Bun installation not found. Exiting."
  exit 1
fi

echo "Node version: $(node -v)"
echo "Bun version: $(bun -v)"
echo "PM2 version: $(pm2 -v)"

echo "🔍 Checking for required dependencies..."
bun install

echo "🏗️ Building project..."
bun run build

echo "🚀 Restarting application with PM2..."
APP_NAME="cribelab-website"

if pm2 describe "$APP_NAME" > /dev/null 2>&1; then
  echo "Application '$APP_NAME' exists. Reloading..."
  pm2 reload "$APP_NAME"
else
  echo "Application '$APP_NAME' does not exist. Starting new..."
  # 用 bun 来运行 start 脚本
  pm2 start bun --name "$APP_NAME" -- start
fi

pm2 save

echo "🎉 Deployment finished successfully! ---"