import { NavigationBar } from "@/components/navigation-bar"
import { SettingsPanel } from "@/components/settings-panel"
import { UserMenu } from "@/components/user-menu"

export default function SettingsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">t2x</h1>
          <UserMenu />
        </div>
        <NavigationBar />
        <div className="mt-8">
          <SettingsPanel />
        </div>
      </div>
    </main>
  )
}

