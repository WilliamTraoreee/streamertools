import type { Opaque } from '@poppinss/utils/types'

export type UUID = Opaque<string, 'UUID'>

export type Status = 'pending' | 'approved' | 'rejected'
