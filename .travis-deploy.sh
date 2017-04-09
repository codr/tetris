# Inside this git repo we'll pretend to be a new user
git config user.name "Travis CI"
git config user.email "travis@example.com"

# Force add the new dist directory
git add -f dist/
git commit -m "Deploy to GitHub Pages"

# Tokens GH_TOKEN and GH_REF will be provided as Travis CI environment variables
git subtree push --prefix dist "https://${GH_TOKEN}@${GH_REF}" gh-pages
