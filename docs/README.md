# Tinad Sanity CMS Documentation

Complete documentation for the Sanity CMS integration in the Tinad music label website.

## 📚 Documentation Overview

This documentation covers everything you need to set up, manage, and deploy the Tinad website with Sanity CMS.

### Quick Start

New to the project? Start here:

1. **[Setup Guide](SANITY_SETUP_GUIDE.md)** - Get Sanity configured and running
2. **[Content Management Guide](CONTENT_MANAGEMENT_GUIDE.md)** - Learn to create and manage content
3. **[Deployment Guide](DEPLOYMENT_GUIDE.md)** - Deploy to production

### Reference Documentation

- **[Environment Variables](ENVIRONMENT_VARIABLES.md)** - Complete guide to configuration
- **[Troubleshooting Guide](TROUBLESHOOTING_GUIDE.md)** - Fix common issues

## 🚀 Quick Links

### For Content Managers

- [How to add a new artist](CONTENT_MANAGEMENT_GUIDE.md#creating-a-new-artist)
- [How to publish a blog post](CONTENT_MANAGEMENT_GUIDE.md#creating-a-new-blog-post)
- [How to add a producer](CONTENT_MANAGEMENT_GUIDE.md#creating-a-new-producer)
- [Image guidelines](CONTENT_MANAGEMENT_GUIDE.md#image-guidelines)

### For Developers

- [Initial setup](SANITY_SETUP_GUIDE.md)
- [Environment configuration](ENVIRONMENT_VARIABLES.md)
- [CORS setup](SANITY_SETUP_GUIDE.md#step-7-configure-cors-required)
- [Deployment process](DEPLOYMENT_GUIDE.md)

### For Troubleshooting

- [Connection issues](TROUBLESHOOTING_GUIDE.md#connection-issues)
- [CORS errors](TROUBLESHOOTING_GUIDE.md#cors-errors)
- [Image problems](TROUBLESHOOTING_GUIDE.md#image-loading-problems)
- [Build failures](TROUBLESHOOTING_GUIDE.md#build-and-deployment-issues)

## 📖 Documentation Structure

### 1. [Sanity Setup Guide](SANITY_SETUP_GUIDE.md)

**Purpose**: Get Sanity CMS up and running

**Covers**:
- Creating a Sanity project
- Installing and configuring Sanity Studio
- Setting up environment variables
- Configuring CORS
- Verifying the connection
- Populating initial content

**Who needs this**: Developers setting up the project for the first time

**Time required**: 30-45 minutes

---

### 2. [Content Management Guide](CONTENT_MANAGEMENT_GUIDE.md)

**Purpose**: Learn to create and manage content in Sanity Studio

**Covers**:
- Accessing Sanity Studio
- Creating and editing artists
- Publishing blog posts
- Managing producers
- Image optimization guidelines
- Publishing workflow
- Using the Vision tool

**Who needs this**: Content managers, editors, and anyone adding content

**Time required**: 15 minutes to read, ongoing for content management

---

### 3. [Environment Variables Documentation](ENVIRONMENT_VARIABLES.md)

**Purpose**: Understand and configure environment variables

**Covers**:
- Required vs optional variables
- Variable naming conventions
- Development vs production configurations
- Security best practices
- Troubleshooting variable issues

**Who needs this**: Developers configuring environments

**Time required**: 10 minutes

---

### 4. [Deployment Guide](DEPLOYMENT_GUIDE.md)

**Purpose**: Deploy Sanity Studio and React frontend to production

**Covers**:
- Pre-deployment checklist
- Deploying Sanity Studio
- Deploying to Vercel
- Deploying to Netlify
- Deploying to other platforms
- Post-deployment verification
- Continuous deployment setup
- Rollback strategies

**Who needs this**: Developers deploying to production

**Time required**: 45-60 minutes for first deployment

---

### 5. [Troubleshooting Guide](TROUBLESHOOTING_GUIDE.md)

**Purpose**: Diagnose and fix common issues

**Covers**:
- Connection problems
- CORS errors
- Content not displaying
- Image loading issues
- Build failures
- Performance problems
- Studio issues
- Environment variable problems

**Who needs this**: Anyone encountering issues

**Time required**: As needed for specific problems

---

## 🎯 Common Workflows

### First-Time Setup

1. Read [Setup Guide](SANITY_SETUP_GUIDE.md)
2. Follow steps 1-8
3. Verify connection works
4. Read [Content Management Guide](CONTENT_MANAGEMENT_GUIDE.md)
5. Create initial content

**Estimated time**: 1-2 hours

---

### Adding New Content

1. Open Sanity Studio (`http://localhost:3333`)
2. Follow [Content Management Guide](CONTENT_MANAGEMENT_GUIDE.md)
3. Create content
4. Publish
5. Verify on website

**Estimated time**: 5-15 minutes per item

---

### Deploying to Production

1. Complete [Pre-Deployment Checklist](DEPLOYMENT_GUIDE.md#pre-deployment-checklist)
2. Deploy Sanity Studio
3. Configure production environment variables
4. Deploy React frontend
5. Update CORS settings
6. Verify deployment

**Estimated time**: 1 hour first time, 10 minutes for updates

---

### Fixing Issues

1. Identify the problem
2. Check [Troubleshooting Guide](TROUBLESHOOTING_GUIDE.md)
3. Follow relevant solutions
4. If stuck, gather debug info
5. Seek help with debug info

**Estimated time**: Varies by issue

---

## 🛠️ Technical Overview

### Architecture

```
┌─────────────────────────────────────────┐
│         Tinad React App                  │
│  - Vite + React 19                       │
│  - GSAP animations                       │
│  - Tailwind CSS                          │
└─────────────────────────────────────────┘
                  ↕
┌─────────────────────────────────────────┐
│         Sanity.io Cloud                  │
│  - Content Lake                          │
│  - Image CDN                             │
│  - GROQ API                              │
└─────────────────────────────────────────┘
                  ↕
┌─────────────────────────────────────────┐
│         Sanity Studio                    │
│  - Content management UI                 │
│  - Schema definitions                    │
│  - Vision query tool                     │
└─────────────────────────────────────────┘
```

### Content Types

1. **Artists**
   - Name, genre, images, bio, social links
   - Used in: Homepage carousel, Artists page

2. **Blog Posts**
   - Title, description, content, images, date
   - Used in: Blog page

3. **Producers**
   - Name, specialty, image, bio
   - Used in: Homepage producer section

### Key Technologies

- **Frontend**: React 19, Vite, GSAP, Tailwind CSS
- **CMS**: Sanity.io
- **Query Language**: GROQ
- **Image CDN**: Sanity Image CDN
- **Hosting**: Vercel/Netlify (recommended)

---

## 📋 Checklists

### Setup Checklist

- [ ] Sanity account created
- [ ] Project created in Sanity
- [ ] Datasets created (development, production)
- [ ] Studio installed and running
- [ ] Environment variables configured
- [ ] CORS configured
- [ ] Connection verified
- [ ] Initial content created

### Pre-Deployment Checklist

- [ ] All content created and published
- [ ] Images optimized
- [ ] CORS configured for production domain
- [ ] Environment variables documented
- [ ] Production dataset populated
- [ ] Build tested locally
- [ ] Performance tested

### Content Quality Checklist

- [ ] All required fields filled
- [ ] Images high quality and optimized
- [ ] Text proofread
- [ ] Links tested
- [ ] Publication date correct
- [ ] Content previewed
- [ ] Published (not draft)

---

## 🔗 External Resources

### Sanity Documentation

- [Sanity Docs](https://www.sanity.io/docs)
- [GROQ Query Language](https://www.sanity.io/docs/groq)
- [Image URLs](https://www.sanity.io/docs/image-url)
- [Schema Types](https://www.sanity.io/docs/schema-types)

### Community

- [Sanity Slack](https://slack.sanity.io)
- [Sanity Exchange](https://www.sanity.io/exchange)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/sanity)

### Tools

- [GROQ Arcade](https://groq.dev) - Test GROQ queries
- [Sanity Studio](https://www.sanity.io/studio)
- [Vision Tool](https://www.sanity.io/docs/the-vision-plugin)

---

## 🆘 Getting Help

### Self-Service

1. Check [Troubleshooting Guide](TROUBLESHOOTING_GUIDE.md)
2. Search [Sanity Docs](https://www.sanity.io/docs)
3. Review browser console errors
4. Test with Vision tool in Studio

### Community Support

1. [Sanity Slack](https://slack.sanity.io) - Active community
2. [Stack Overflow](https://stackoverflow.com/questions/tagged/sanity) - Q&A
3. [GitHub Issues](https://github.com/sanity-io/sanity) - Bug reports

### Professional Support

- [Sanity Support](https://www.sanity.io/help)
- Email: support@sanity.io

### When Asking for Help

Include:
- Exact error message
- Browser console logs
- Steps to reproduce
- What you've already tried
- Environment (dev/production)

---

## 📝 Document Maintenance

### Keeping Documentation Updated

This documentation should be updated when:
- New features are added
- Configuration changes
- Common issues are discovered
- Deployment process changes

### Contributing

To improve this documentation:
1. Identify gaps or outdated information
2. Update relevant markdown files
3. Test instructions
4. Update this README if structure changes

---

## 🎓 Learning Path

### For Content Managers

**Week 1**: Learn the basics
1. Read [Content Management Guide](CONTENT_MANAGEMENT_GUIDE.md)
2. Practice creating content in Studio
3. Learn image optimization

**Week 2**: Master the workflow
1. Create real content
2. Learn publishing workflow
3. Use Vision tool for queries

**Ongoing**: Stay updated
- Review new features
- Optimize content
- Follow best practices

### For Developers

**Day 1**: Setup
1. Complete [Setup Guide](SANITY_SETUP_GUIDE.md)
2. Understand [Environment Variables](ENVIRONMENT_VARIABLES.md)
3. Verify everything works

**Day 2**: Development
1. Explore codebase
2. Understand data flow
3. Test locally

**Day 3**: Deployment
1. Read [Deployment Guide](DEPLOYMENT_GUIDE.md)
2. Deploy to staging
3. Deploy to production

**Ongoing**: Maintenance
- Monitor performance
- Update dependencies
- Fix issues as they arise

---

## 📊 Quick Reference

### Common Commands

```bash
# Start development
pnpm dev

# Start Studio
cd studio && pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Deploy Studio
cd studio && sanity deploy

# Test Sanity connection
node verify-sanity-connection.js
```

### Important URLs

- **Local Frontend**: http://localhost:5173
- **Local Studio**: http://localhost:3333
- **Sanity Dashboard**: https://manage.sanity.io
- **Deployed Studio**: https://[your-project].sanity.studio

### Key Files

- `.env.local` - Environment variables
- `src/sanity/client.js` - Sanity client config
- `src/sanity/queries.js` - GROQ queries
- `studio/sanity.config.ts` - Studio config
- `studio/schemaTypes/` - Content schemas

---

## 🎉 Success Criteria

You'll know everything is working when:

- ✅ Studio loads at localhost:3333
- ✅ Frontend loads at localhost:5173
- ✅ Content displays on website
- ✅ Images load correctly
- ✅ No console errors
- ✅ Animations work smoothly
- ✅ Can create and publish content
- ✅ Production site works correctly

---

## 📅 Version History

- **v1.0** - Initial documentation (January 2024)
  - Setup guide
  - Content management guide
  - Environment variables guide
  - Deployment guide
  - Troubleshooting guide

---

## 📄 License

This documentation is part of the Tinad project.

---

## 🙏 Acknowledgments

- Sanity.io for excellent CMS platform
- React and Vite teams
- GSAP for animation library
- Tailwind CSS for styling framework

---

**Need help?** Start with the [Troubleshooting Guide](TROUBLESHOOTING_GUIDE.md) or reach out on [Sanity Slack](https://slack.sanity.io).

**Ready to start?** Begin with the [Setup Guide](SANITY_SETUP_GUIDE.md).
