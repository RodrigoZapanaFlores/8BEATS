import React from 'react'
import { Section, BeatList } from '../../components'

function DiscoverScreen() {
  return (
    <>
      <Section title="Top" icon="fire">
        <BeatList />
      </Section>

      <Section title="Discover" icon="wpexplorer">
        <BeatList />
      </Section>
    </>
  )
}

export default DiscoverScreen