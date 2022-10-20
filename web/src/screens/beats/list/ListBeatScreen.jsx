import { ListBeat, Section } from "../../../components"

function ListBeatScreen() {
  return (
    <>
      <Section title="Top" icon="fire">
        <ListBeat />
      </Section>

      <Section title="Discover" icon="wpexplorer">
        <ListBeat />
      </Section>
    </>
  )
}

export default ListBeatScreen;