import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ContactForm = () => {
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-center">Get in Touch</CardTitle>
        <p className="text-muted-foreground text-center">
          Ready to discuss your venture? We'd love to hear from you.
        </p>
      </CardHeader>
      <CardContent>
        <iframe
          src="https://tally.so/embed/w87z6r?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          width="100%"
          height="600"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="Contact Form"
          className="rounded-lg"
        />
      </CardContent>
    </Card>
  );
};

export default ContactForm;
