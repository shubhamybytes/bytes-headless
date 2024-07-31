import { defineType, defineArrayMember, defineField } from "sanity";

export const product = defineType({
    name: "product",
    title: "Product",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: 'Product Title',
            type: "string"
        }),
        defineField({
            name: "tags",
            type: "array",
            title: "Product Tags",
            of: [
                defineArrayMember({
                    type: "object",
                    name: "tag",
                    fields: [
                        {type: "string", name: 'label', title: "Tag Label"},
                        {type: "string", name: 'value', title: "Tag Value"}
                    ]
                })
            ]
        })
    ]
})