import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function PlaygroundPage() {
    return (
        <main className="min-h-screen bg-background p-10">
            <div className="mx-auto max-w-6xl space-y-10">

                <div>
                    <h1 className="text-4xl font-bold">
                        RepeTutor UI Playground
                    </h1>

                    <p className="mt-2 text-muted-foreground">
                        Тут тестуються всі UI компоненти.
                    </p>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Buttons</CardTitle>
                    </CardHeader>

                    <CardContent className="flex gap-4 flex-wrap">
                        <Button>Primary</Button>

                        <Button variant="secondary">
                            Secondary
                        </Button>

                        <Button variant="outline">
                            Outline
                        </Button>

                        <Button variant="ghost">
                            Ghost
                        </Button>

                        <Button variant="destructive">
                            Delete
                        </Button>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Inputs</CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-4">
                        <Input placeholder="Введіть назву домашньої роботи..." />

                        <Input placeholder="Пошук..." />
                    </CardContent>
                </Card>

            </div>
        </main>
    );
}