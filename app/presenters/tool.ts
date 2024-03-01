import Tool from '#models/tool'

export class AllToolsPresenter {
  json(tools: Tool[]) {
    return tools.map((tool) => ({
      ...tool.toJSON(),
      displayUrl: new URL(tool.url).hostname,
    }))
  }
}

export class SingleToolPresenter {
  json(tool: Tool) {
    return {
      ...tool.toJSON(),
      displayUrl: new URL(tool.url).hostname,
    }
  }
}
