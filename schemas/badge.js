export default {
    name: "badge",
    title: "Badges",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "description", 
            title: "Description",
            type: "array", 
            of: [
                { type: 'block' }, 
            ]
        },
        {
            name: 'badgeImage',
            title: 'Badge Image',
            type: 'image'
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: 'title',
                maxLength: 96
            }
        },
        {
            title: 'Students',
            name: 'student',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [
                        {type: 'student'}
                    ]
                }
            ],
            validation: Rule => Rule.unique()
        }
    ]
}