import { validServices } from './types'

export async function generateStaticParams() {
  return validServices.map((service) => ({
    service,
  }))
}

export const dynamic = 'error'
export const dynamicParams = false 