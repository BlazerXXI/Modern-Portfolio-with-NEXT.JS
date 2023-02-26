import {schemaTypes} from 'sanity'

import pageInfo from './pageInfo'

export default createSchema({name: 'default', types: schemaTypes.concat([pageInfo])})

export const schemaTypes = [pageInfo]
