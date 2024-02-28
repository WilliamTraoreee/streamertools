export type ProviderData = {
  username: string
  email: string
  avatar_url: string
  token: {
    access_token: string
    refresh_token: string
  }
}

export type Role = 'user' | 'admin'
