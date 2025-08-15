export interface Course {
    id: number
    name: string
    description: string
    language: 'english' | 'russian' | 'turkish'
    level: 'beginner' | 'intermediate' | 'advanced'
    duration: string
    price: number
    features: string[]
    image?: string
}