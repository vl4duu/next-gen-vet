"use client"

import React, {useState} from "react"
import {Card} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";

export default function EmailForm() {
    const [email, setEmail] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        alert(`Email submitted: ${email}`)
    }

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            {/* Booking Form Section */}
            <div className="max-w-3xl mx-auto mb-16">
                <h2 className="text-2xl font-bold text-center mb-8">
                    Fă-ți o programare la animalul tău de companie și lasă-ne restul!
                </h2>

                <Card className="p-6">
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="name">Nume</Label>
                                <Input id="name" placeholder="Numele dvs." />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="Email-ul dvs." />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="service">Serviciu</Label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Selectați serviciul" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="consultatie">Consultație</SelectItem>
                                        <SelectItem value="vaccinare">Vaccinare</SelectItem>
                                        <SelectItem value="chirurgie">Chirurgie</SelectItem>
                                        <SelectItem value="analize">Analize</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="date">Data</Label>
                                <Input id="date" type="date" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="message">Mesaj</Label>
                            <Textarea id="message" placeholder="Scrieți mesajul dvs. aici..." className="min-h-[120px]" />
                        </div>

                        <Button type="submit" className="w-full md:w-auto bg-orange-500 hover:bg-orange-600">
                            Trimite
                        </Button>
                    </form>
                </Card>
            </div>
        </div>
    )
}