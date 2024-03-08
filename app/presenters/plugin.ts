import Plugin from '#models/plugin'

export class AllPluginsPresenter {
  json(plugins: Plugin[]) {
    return plugins.map((plugin) => ({
      ...plugin.toJSON(),
      displayUrl: new URL(plugin.url).hostname,
    }))
  }
}

export class SinglePluginPresenter {
  json(plugin: Plugin) {
    return {
      ...plugin.toJSON(),
      displayUrl: new URL(plugin.url).hostname,
    }
  }
}

export class StatusPluginsPresenter {
  json(plugins: Plugin[]) {
    return {
      approved: plugins
        .filter((plugin) => plugin.status === 'approved')
        .map((plugin) => ({
          ...plugin.toJSON(),
        })),
      pending: plugins
        .filter((plugin) => plugin.status === 'pending')
        .map((plugin) => ({
          ...plugin.toJSON(),
        })),
      rejected: plugins
        .filter((plugin) => plugin.status === 'rejected')
        .map((plugin) => ({
          ...plugin.toJSON(),
        })),
    }
  }
}
