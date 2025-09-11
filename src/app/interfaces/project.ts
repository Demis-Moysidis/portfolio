export interface Project {
    id: number,
    title: string,
    description: string,
    implementation: string,
    duration: string,
    technologies: {
        img: string,
        name: string
    }[],
    img: string,
    round_img: string,
    round_text_top: string,
    round_text_bottom: string,
    github: boolean,
    live_test: boolean,
    round_black?: boolean,
    in_progress?: boolean,
    github_link?: string,
    live_test_link?: string
}
