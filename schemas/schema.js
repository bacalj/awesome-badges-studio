import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import siteSettings from './siteSettings'
import badge from './badge'
import student from './student'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    badge, student, siteSettings
  ])
})
