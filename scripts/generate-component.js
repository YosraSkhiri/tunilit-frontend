import fs from 'fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'url'
import { argv } from 'node:process'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

let componentName = argv[2]
let componentsFolder = path.join(__dirname, '../src/components')
let componentFolderName = path.join(componentsFolder, `/${componentName}`)

const componentFiles = [
  `${componentName}.tsx`,
  `${componentName}.types.ts`,
  `${componentName}.module.scss`,
  `${componentName}.stories.tsx`,
  `${componentName}.test.tsx`,
  'index.tsx',
]

const componentFilesContent = [
`import styles from './${componentName}.module.scss'
import ${componentName}Props from './${componentName}.types.ts'

const ${componentName} = ({}: ${componentName}Props) => {
  return (<div />)
}

export default ${componentName}`,
`export default interface ${componentName}Props {}`,
'',
`import { Meta, StoryObj } from '@storybook/react'
import ${componentName} from './${componentName}'

const meta: Meta<typeof ${componentName}> = {
  component: ${componentName},
}

export default meta

type Story = StoryObj<typeof ${componentName}>

export const Playground: Story = {
  render: (args) => <${componentName} {...args} />,
}`,
`import { render } from '@testing-library/react'
import { describe, expect } from 'vitest'
import ${componentName} from './${componentName}'

describe('<${componentName} />', () => {

})`,
`import ${componentName} from './${componentName}'

export default ${componentName}`,
]

const directoryExists = async (dirPath) => {
  try {
    await fs.access(dirPath)
    return true
  } catch (error) {
    if (error.code === 'ENOENT') {
      // console.log(error)
      return false
    }
    throw error
  }
}

const createComponentFiles = async (componentFiles) => {
  await Promise.all(componentFiles.map(async (file, index) => {
    try {
      await fs.appendFile(`${componentFolderName}/${file}`, componentFilesContent[index])
    } catch (error) {
      console.log(error)
    }
  }))
}

(async () => {
  const directoryExistsResult = await directoryExists(componentFolderName)
  if (!directoryExistsResult) {
    try {
      await fs.mkdir(componentFolderName)
      await createComponentFiles(componentFiles)
      console.log('Component files created')
    } catch (error) {
      console.error('Error creating component directory or files:', error)
    }
  }
})()
