import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'track',
  title: 'Track',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Track Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      description: 'Album or single cover art',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'releaseYear',
      title: 'Release Year',
      type: 'number',
      description: 'Year the track was released',
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
      description: 'Track duration in MM:SS format (e.g., 3:45)',
    }),
    defineField({
      name: 'spotifyLink',
      title: 'Spotify Link',
      type: 'url',
      description: 'Link to the track on Spotify',
    }),
    defineField({
      name: 'appleMusicLink',
      title: 'Apple Music Link',
      type: 'url',
      description: 'Link to the track on Apple Music',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'releaseYear',
      media: 'coverImage',
    },
    prepare(selection) {
      const {title, subtitle, media} = selection
      return {
        title: title,
        subtitle: subtitle ? `${subtitle}` : 'No release year',
        media: media,
      }
    },
  },
})
