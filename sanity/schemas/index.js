import createSchema from 'part:@sanity/base/schema-creator'

import experience from './experience'
import skill from './skill'
import pageInfo from './pageInfo'
import social from './social'
import project from './project'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat({
    experience: experience,
    skill: skill,
    pageInfo: pageInfo,
    social: social,
    project: project,
  }),
})
