import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Chrome, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ChromeExtensionPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link className="flex items-center justify-center" href="/">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>
      </header>
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  AI99 Prompts Chrome Extension
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                  Access your prompt library directly in your browser with our powerful Chrome extension
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>300+ categorized prompts ready to use</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Save and organize your own custom prompts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>One-click insertion into any AI interface</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Regular updates with new prompts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Works with ChatGPT, Claude, Bard, and more</span>
                </div>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg">
                  <Chrome className="mr-2 h-4 w-4" /> Install Extension ($24.99)
                </Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
            <Image
              src="/placeholder.svg?height=600&width=500"
              width={500}
              height={600}
              alt="Chrome Extension Screenshot"
              className="mx-auto aspect-auto overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
            />
          </div>

          <div className="mt-16">
            <Tabs defaultValue="features" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="how-it-works">How It Works</TabsTrigger>
                <TabsTrigger value="faq">FAQ</TabsTrigger>
              </TabsList>
              <TabsContent value="features" className="p-4 border rounded-lg mt-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <CardTitle>Prompt Library</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Access 300+ professionally crafted prompts organized by category, use case, and AI model
                        compatibility.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Custom Collections</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Create your own prompt collections and organize them by project, client, or any other category
                        that makes sense for your workflow.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>One-Click Insertion</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Insert any prompt into your AI chat with a single click, saving time and ensuring consistency in
                        your interactions.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Template Variables</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Create prompts with customizable variables that you can fill in before insertion, making your
                        prompts more flexible and reusable.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Cloud Sync</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Sync your custom prompts across devices, ensuring you always have access to your entire prompt
                        library.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Regular Updates</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Receive new prompts and features regularly as we continue to expand and improve the extension.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="how-it-works" className="p-4 border rounded-lg mt-4">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium">1. Install the Extension</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                      Add the AI99 Prompts extension to Chrome from our website or the Chrome Web Store.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">2. Browse the Prompt Library</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                      Explore our extensive collection of prompts organized by category, use case, and AI model
                      compatibility.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">3. Customize Your Collection</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                      Save your favorite prompts, create your own, and organize them into collections that match your
                      workflow.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">4. Use Prompts with Any AI</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                      When using any AI interface, click on a prompt in the extension to instantly insert it into your
                      conversation.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">5. Fill in Template Variables</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                      For prompts with variables, you'll be prompted to fill in the specific details before insertion.
                    </p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="faq" className="p-4 border rounded-lg mt-4">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium">Which AI platforms does the extension work with?</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                      The extension works with all major AI platforms including ChatGPT, Claude, Bard, Bing AI, and any
                      other web-based AI interface.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Can I use the extension on multiple devices?</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                      Yes, your prompt library syncs across all devices where you're signed in with the same account.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">How often are new prompts added?</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                      We add new prompts weekly, focusing on the latest AI capabilities and use cases.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Is there a limit to how many custom prompts I can create?</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                      No, you can create unlimited custom prompts and organize them into as many collections as you
                      need.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Do you offer bulk licensing for teams?</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                      Yes, we offer team licenses with additional collaboration features. Contact us for more
                      information.
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2023 AI99 Prompts. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  )
}
