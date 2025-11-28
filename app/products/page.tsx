import Link from "next/link"
import { ArrowLeft, Download, Chrome } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function ProductsPage() {
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
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Products</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Explore our complete collection of AI prompt resources
              </p>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Comprehensive Prompt Framework</CardTitle>
                <CardDescription>A structured approach to crafting effective AI prompts</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Our 45-page PDF guide provides a systematic framework for creating prompts that get consistent,
                  high-quality results from any AI model. Perfect for professionals who want to master the art of prompt
                  engineering.
                </p>
                <div className="mt-4 text-sm font-medium">Price: $29</div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <Download className="mr-2 h-4 w-4" /> Download PDF
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Professional Prompt Cheatsheet</CardTitle>
                <CardDescription>Ready-to-use prompts for business applications</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  A collection of 200+ professionally crafted prompts organized by business function. These time-saving
                  templates can be immediately applied to your work across marketing, data analysis, product
                  development, and customer service.
                </p>
                <div className="mt-4 text-sm font-medium">Price: $19</div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <Download className="mr-2 h-4 w-4" /> Download PDF
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Advanced Prompt Engineering Guide</CardTitle>
                <CardDescription>Master the art and science of prompt engineering</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  A deep dive into advanced prompt engineering techniques with 60+ pages of expert knowledge. This
                  comprehensive guide covers chain-of-thought prompting, few-shot learning optimization, model-specific
                  strategies, and troubleshooting.
                </p>
                <div className="mt-4 text-sm font-medium">Price: $39</div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <Download className="mr-2 h-4 w-4" /> Download PDF
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>AI99 Prompts Chrome Extension</CardTitle>
                <CardDescription>Access your prompt library directly in your browser</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Our custom Chrome extension puts a powerful prompt library at your fingertips. With 300+ categorized
                  prompts ready to use, you can save and organize your own custom prompts and insert them with one click
                  into any AI interface.
                </p>
                <div className="mt-4 text-sm font-medium">Price: $24.99</div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <Chrome className="mr-2 h-4 w-4" /> Install Extension
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>PDF Bundle</CardTitle>
                <CardDescription>All three PDF resources at a discounted price</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Get all three of our PDF resources - the Comprehensive Prompt Framework, Professional Prompt
                  Cheatsheet, and Advanced Prompt Engineering Guide - in one discounted bundle.
                </p>
                <div className="mt-4 text-sm font-medium">Price: $69 (Save $18)</div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <Download className="mr-2 h-4 w-4" /> Download Bundle
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
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Our ultimate package includes all three PDF resources plus the Chrome extension with lifetime updates.
                  You'll also get priority email support and early access to new prompt resources.
                </p>
                <div className="mt-4 text-sm font-medium">Price: $89 (Save $23.99)</div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <Download className="mr-2 h-4 w-4" /> Get Complete Bundle
                </Button>
              </CardFooter>
            </Card>
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
