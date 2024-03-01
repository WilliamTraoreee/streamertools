import Tool from '#models/tool'

export class AllToolsPresenter {
  json(tools: Tool[]) {
    return tools
  }
}
