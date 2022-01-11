/* export interface AgeOfEmpiresUnits{
    id: number,
    name: string,
    description: string,
    expansion: string,
    age: string,
    created_in: string,  
    cost: any,
    build_time: number,
    reload_time: number,
    attack_delay: number,
    movement_rate: number,
    line_of_sight: number,
    hit_points: number,
    range: string,
    attack: number,
    armor: string,
    attack_bonus: string[]
    armor_bonus: string[]
    search_radius: 0,
    accuracy: string,
    blast_radius: number
}

 */


export interface WordDefinitions {
    word: string,
    phonetics: PhoneticsItem[];
    meanings: MeaningsItem[]
}
interface PhoneticsItem {
    text: string,
    audio: string
}
interface MeaningsItem {
    partOfSpeech: string,
    definitions: DefinitionsItem[]
}
interface DefinitionsItem {
    definition: string,
    example: string,
    synonyms?: string[]
}


