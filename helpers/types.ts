export interface IPost {
    title: string
    body: string
    id: number
}

export interface IComment {

}

export enum Statuses {
    notInit = 0,
    isLoading = 1,
    success = 2,
    error = 3
}
