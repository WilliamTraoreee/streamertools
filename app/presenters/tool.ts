import Tool from '#models/tool'

export class AllToolsPresenter {
  json(tools: Tool[]) {
    return tools.map((tool) => ({
      ...tool.toJSON(),
      displayUrl: new URL(tool.url).hostname,
    }))
  }
}
