import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Download, Chrome, FileText, Zap, Star, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link className="flex items-center justify-center" href="#">
          <FileText className="h-6 w-6 mr-2" />
          <span className="font-bold">AI99 Prompts</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#products">
            Products
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#pricing">
            Pricing
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Master AI Prompting for Work
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Unlock the full potential of AI with our comprehensive prompt guides, frameworks, and Chrome
                    extension.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="#products">
                      Explore Products <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="#chrome-extension">
                      <Chrome className="mr-2 h-4 w-4" /> Get Chrome Extension
                    </Link>
                  </Button>
                </div>
              </div>
              <Image
                src="/images/ai-prompting-hero-grayscale.png"
                width={550}
                height={550}
                alt="AI Prompting Hero Image"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        <section id="products" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Premium Resources
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our AI Prompt Products</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Downloadable frameworks, guides, and tools to enhance your AI interactions
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-10">
              <Card>
                <CardHeader>
                  <CardTitle>Comprehensive Prompt Framework</CardTitle>
                  <CardDescription>A structured approach to crafting effective AI prompts</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Our 45-page PDF guide provides a systematic framework for creating prompts that get consistent,
                      high-quality results from any AI model. Includes:
                    </p>
                    <ul className="grid gap-2 py-4">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Step-by-step prompt construction methodology</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Context optimization techniques</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Role-based prompting strategies</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Output formatting controls</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <Download className="mr-2 h-4 w-4" /> Download PDF ($29)
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Professional Prompt Cheatsheet</CardTitle>
                  <CardDescription>Ready-to-use prompts for business applications</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      A collection of 200+ professionally crafted prompts organized by business function. Perfect for:
                    </p>
                    <ul className="grid gap-2 py-4">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Marketing copy and content creation</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Data analysis and reporting</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Product development and brainstorming</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Customer service and support</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <Download className="mr-2 h-4 w-4" /> Download PDF ($19)
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Advanced Prompt Engineering Guide</CardTitle>
                  <CardDescription>Master the art and science of prompt engineering</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      A deep dive into advanced prompt engineering techniques with 60+ pages of expert knowledge:
                    </p>
                    <ul className="grid gap-2 py-4">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Chain-of-thought prompting techniques</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Few-shot learning optimization</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Model-specific prompt strategies</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Troubleshooting common prompt issues</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <Download className="mr-2 h-4 w-4" /> Download PDF ($39)
                  </Button>
                </CardFooter>
              </Card>

              <Card id="chrome-extension">
                <CardHeader>
                  <CardTitle>AI99 Prompts Chrome Extension</CardTitle>
                  <CardDescription>Access your prompt library directly in your browser</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Our custom Chrome extension puts a powerful prompt library at your fingertips:
                    </p>
                    <ul className="grid gap-2 py-4">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>300+ categorized prompts ready to use</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Save and organize your own custom prompts</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>One-click insertion into any AI interface</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Regular updates with new prompts</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <Chrome className="mr-2 h-4 w-4" /> Install Extension ($24.99)
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose Our Products</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Designed by AI experts to help you get more value from AI tools
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                <div className="rounded-full bg-gray-200 p-2 dark:bg-gray-700">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Boost Productivity</h3>
                <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                  Save hours of trial and error with proven prompt techniques that work consistently
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                <div className="rounded-full bg-gray-200 p-2 dark:bg-gray-700">
                  <Star className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Expert-Crafted</h3>
                <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                  Created by AI specialists with thousands of hours of prompt engineering experience
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                <div className="rounded-full bg-gray-200 p-2 dark:bg-gray-700">
                  <FileText className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Comprehensive</h3>
                <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                  Covers all aspects of prompt engineering from basics to advanced techniques
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                <div className="rounded-full bg-gray-200 p-2 dark:bg-gray-700">
                  <Chrome className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Seamless Integration</h3>
                <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                  Our Chrome extension works with all major AI platforms and interfaces
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                <div className="rounded-full bg-gray-200 p-2 dark:bg-gray-700">
                  <Download className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Instant Access</h3>
                <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                  Download PDFs immediately after purchase and start improving your prompts today
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                <div className="rounded-full bg-gray-200 p-2 dark:bg-gray-700">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Proven Results</h3>
                <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                  Frameworks and techniques tested across multiple AI models and use cases
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Bundle and Save</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Get more value with our product bundles
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>PDF Bundle</CardTitle>
                  <CardDescription>All three PDF resources at a discounted price</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center text-4xl font-bold">$69</div>
                  <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-2">
                    Save $18 compared to individual purchases
                  </div>
                  <ul className="grid gap-2 py-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Comprehensive Prompt Framework</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Professional Prompt Cheatsheet</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Advanced Prompt Engineering Guide</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <Download className="mr-2 h-4 w-4" /> Get PDF Bundle
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border-2 border-primary">
                <CardHeader>
                  <div className="flex justify-center">
                    <div className="rounded-full bg-primary px-3 py-1 text-xs text-primary-foreground">BEST VALUE</div>
                  </div>
                  <CardTitle className="mt-4">Complete Bundle</CardTitle>
                  <CardDescription>Everything you need for AI prompt mastery</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center text-4xl font-bold">$89</div>
                  <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-2">
                    Save $23.99 compared to individual purchases
                  </div>
                  <ul className="grid gap-2 py-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>All three PDF resources</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Chrome Extension with lifetime updates</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Priority email support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Early access to new prompt resources</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <Download className="mr-2 h-4 w-4" /> Get Complete Bundle
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Ready to Transform Your AI Experience?
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Join thousands of professionals who have improved their AI interactions with our products
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" asChild>
                  <Link href="#products">
                    Get Started Today <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
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
