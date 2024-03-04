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

export class StatusToolsPresenter {
  json(tools: Tool[]) {
    return {
      approved: tools
        .filter((tool) => tool.status === 'approved')
        .map((tool) => ({
          ...tool.toJSON(),
        })),
      pending: tools
        .filter((tool) => tool.status === 'pending')
        .map((tool) => ({
          ...tool.toJSON(),
        })),
      rejected: tools
        .filter((tool) => tool.status === 'rejected')
        .map((tool) => ({
          ...tool.toJSON(),
        })),
    }
  }
}
