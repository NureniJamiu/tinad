import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'artist',
  title: 'Artist',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'genre',
      title: 'Genre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Profile Image',
      type: 'image',
      description: 'Main profile image used in artist cards',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'topImage',
      title: 'Top Display Image',
      type: 'image',
      description: 'Used in Artists page display',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'bottomImage',
      title: 'Bottom Display Image',
      type: 'image',
      description: 'Used in Artists page display',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'bio',
      title: 'Biography',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        {name: 'instagram', type: 'url', title: 'Instagram'},
        {name: 'twitter', type: 'url', title: 'Twitter'},
        {name: 'spotify', type: 'url', title: 'Spotify'},
      ],
    }),
    defineField({
      name: 'tracks',
      title: 'Recent Tracks',
      type: 'array',
      description: 'Select up to 4 recent tracks to display on the artist detail page',
      of: [{type: 'reference', to: [{type: 'track'}]}],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'genre',
      media: 'image',
    },
  },
})
