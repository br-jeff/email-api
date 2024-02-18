import fs from 'fs'
import path from 'path'
import util from 'util'
import _ from 'lodash'

const readFile = util.promisify(fs.readFile)

export async function getEmailHtml(
  data: Record<string, unknown>,
  templatePath: string,
): Promise<string> {
  const dir = path.resolve(templatePath)
  const template = await readFile(dir, 'utf-8')
  const compiled = _.template(template)
  return compiled(data)
}
