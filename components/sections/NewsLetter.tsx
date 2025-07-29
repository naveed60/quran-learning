 import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function NewsLetter() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated with Islamic Learning Tips</h2>
        <p className="text-xl text-gray-600 mb-8">
          Get weekly insights, Quran verses, and learning tips delivered to your inbox
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input type="email" placeholder="Enter your email address" className="flex-1 border-gray-300" />
          <Button className="bg-emerald-600 hover:bg-emerald-700">Subscribe</Button>
        </div>
      </div>
    </section>
  );
}