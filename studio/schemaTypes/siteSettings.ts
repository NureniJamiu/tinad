import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Settings Title',
      type: 'string',
      initialValue: 'Site Settings',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'heroImages',
      title: 'Hero Section Images',
      type: 'array',
      description: 'Upload 3 images for the hero section',
      validation: (Rule) => Rule.required().min(3).max(3),
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
              description: 'Describe the image for accessibility',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'backgroundMusic',
      title: 'Background Music',
      type: 'file',
      description: 'Upload background music file (MP3 format recommended)',
      options: {
        accept: 'audio/*',
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Site Settings',
        subtitle: 'Hero images and background music',
      }
    },
  },
})
