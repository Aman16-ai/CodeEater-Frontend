
export interface Language {
    name : string,
    code : number
}

export interface SubmissionPayload {
    "preferredCodeLanguage":number,
    "standardInput":string,
    "sourceCode":string
}

