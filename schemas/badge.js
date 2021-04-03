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
            hidden: true,
            options: {
                source: 'name',
                maxLength: 96
            }
        },
    ],
    preview: {
        select: {title: 'name', media: 'image'}
    }
}