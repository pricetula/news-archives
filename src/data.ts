import { it } from "node:test"
export interface NewsDump {
    news: NewsData[]
    authors: Author[]
    authorsNews: AuthorNews[]
    people: Person[]
    peopleNews: PersonNews[]
    organisations: Organisation[]
    organisationsNews: OrganisationNews[]
    subjects: Subject[]
    subjectsNews: SubjectNews[]
    typeOfMaterials: TypeOfMaterial[]
    typeOfMaterialsNews: TypeOfMaterialNews[]
    sectionName: SectionName[]
    sectionNameNews: SectionNameNews[]
    documentType: DocumentType[]
    documentTypeNews: DocumentTypeNews[]
    newsDesk: NewsDesk[]
    newsDeskNews: NewsDeskNews[]
}
export interface NewsData {
    id: number
    url: string
    snippet: string
    source: string
    publish_date: string
    word_count: number
    external_id: string
    lead_paragraph: string
    headline: string
    jumbo_img: string
    thumbnail_img: string
}
interface Author {
    id: number
    firstname: string
    middlename: string
    lastname: string
}
interface AuthorNews {
    author_id: number
    news_id: number
    rank: number
}
interface Person {
    id: number
    name: string
}
interface PersonNews {
    person_id: number
    news_id: number
    rank: number
}
interface Organisation {
    id: number
    name: string
}
interface OrganisationNews {
    organisation_id: number
    news_id: number
    rank: number
}
interface Subject {
    id: number
    name: string
}
interface SubjectNews {
    subject_id: number
    news_id: number
    rank: number
}
interface TypeOfMaterial {
    id: number
    name: string
}
interface TypeOfMaterialNews {
    type_of_material_id: number
    news_id: number
}
interface SectionName {
    id: number
    name: string
}
interface SectionNameNews {
    section_name_id: number
    news_id: number
}
interface DocumentType {
    id: number
    name: string
}
interface DocumentTypeNews {
    document_type_id: number
    news_id: number
}
interface NewsDesk {
    id: number
    name: string
}
interface NewsDeskNews {
    news_desk_id: number
    news_id: number
}

export async function getNewsSections() {
    const response = await fetch("http://localhost:3000/nytdata2.json");
    const data = await response.json();
    return data
}
