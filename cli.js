#!/usr/bin/env node
import { execSync } from 'child_process'

const projectName = process.argv[2] || 'my-app'
const repoUrl =
  'https://github.com/PabloFuentesSanz/codewithpablo-boilerplate.git'

console.log(`🚀 Creating a new project: ${projectName}`)
execSync(`git clone ${repoUrl} ${projectName}`, { stdio: 'inherit' })
execSync(`rm -rf ${projectName}/.git`, { stdio: 'inherit' })
console.log(`✅ Project ${projectName} is ready!`)
console.log(`➡️ Run: cd ${projectName} && npm install && npm postinstall`)
