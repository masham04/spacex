import gql from 'graphql-tag'
export const Missioninfo = gql `
query Missioninfo{
    launches{
      mission_id
      mission_name
      launch_success
      launch_year
      flight_number
    }
  }
`