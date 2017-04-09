# Inside this git repo we'll pretend to be a new user
git config user.name "Travis CI"
git config user.email "travis@example.com"

# Force add the new dist directory
git add -f dist/
git commit -m "Deploy to GitHub Pages"

# Force push from the current repo's master branch to the remote
# repo's gh-pages branch. (All previous history on the gh-pages branch
# will be lost, since we are overwriting it.) We redirect any output to
# /dev/null to hide any sensitive credential data that might otherwise be exposed.
# tokens GH_TOKEN and GH_REF will be provided as Travis CI environment variables
git subtree push --prefix dist --quiet "https://${GH_TOKEN}@${GH_REF}" gh-pages > /dev/null 2>&1
