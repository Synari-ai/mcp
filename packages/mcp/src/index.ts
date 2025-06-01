import { AgentRegistry } from "./agent/AgentRegistry"
import { CommunicationChannel } from "./protocol/CommunicationChannel"
import { InMemoryBus } from "./transport/InMemoryBus"
import { EthereumSigner } from "./security/EthereumSigner"

// 1. Setup agent registry
const registry = new AgentRegistry()

// 2. Create a transport bus
const bus = new InMemoryBus()

// 3. Instantiate a signer (mocked)
const signer = new EthereumSigner()

// 4. Setup communication layer
const channel = new CommunicationChannel(bus, signer)

// 5. Register agent
registry.createAgent({
  name: "Agent-X",
  persona: "autonomous-observer",
  channel
})

// 6. Simulate message passing
channel.broadcast("Bootstrapping Synari MCP Protocol...")

// 7. Print registry info
console.log("\n✅ MCP Ready. Registered Agents:")
registry.list().forEach(agent => {
  console.log(`• ${agent.name} (${agent.persona})`)
})
