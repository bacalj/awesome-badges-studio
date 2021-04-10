export default {
    name: "student",
    title: "Students",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Student Name",
            type: "string",
        },
        {
            title: 'Badges Earned',
            name: 'badges',
            type: 'array',
            of: [{
                type: 'reference',
                to: [{type: 'badge'}]
            }],
        }
    ]
}