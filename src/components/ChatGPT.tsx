import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { MessageCircle, Send, Loader2, Key, Eye, EyeOff, Sparkles, Bot, User } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const ChatGPT = () => {
  console.log("React version (ChatGPT):", React?.version ?? "unknown");
  console.log("typeof useState:", typeof useState);

  const [apiKey, setApiKey] = useState(() => {
    // Try to get API key from localStorage
    return localStorage.getItem('openai_api_key') || '';
  });
  const [showApiKey, setShowApiKey] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const saveApiKey = () => {
    if (apiKey.trim()) {
      localStorage.setItem('openai_api_key', apiKey.trim());
      setError('');
    }
  };

  const sendMessage = async () => {
    if (!apiKey.trim()) {
      setError('Please enter your OpenAI API key first');
      return;
    }

    if (!inputMessage.trim()) {
      setError('Please enter a message');
      return;
    }

    const userMessage: Message = { role: 'user', content: inputMessage };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInputMessage('');
    setIsLoading(true);
    setError('');

    try {
      console.log('Sending request to OpenAI API...');
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey.trim()}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: newMessages,
          max_tokens: 1000,
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      console.log('Received response from OpenAI:', data);
      
      if (data.choices && data.choices[0] && data.choices[0].message) {
        const assistantMessage: Message = {
          role: 'assistant',
          content: data.choices[0].message.content
        };
        setMessages([...newMessages, assistantMessage]);
      } else {
        throw new Error('Invalid response format from OpenAI API');
      }
    } catch (err) {
      console.error('Error calling OpenAI API:', err);
      setError(err instanceof Error ? err.message : 'Failed to get response from ChatGPT');
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([]);
    setError('');
  };

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-xl border-0 bg-gradient-to-br from-white to-blue-50/30 backdrop-blur-sm">
      <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
        <CardTitle className="flex items-center gap-3 text-2xl">
          <div className="relative">
            <MessageCircle className="w-8 h-8" />
            <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-yellow-300" />
          </div>
          ChatGPT Assistant
          <Badge variant="secondary" className="ml-auto bg-white/20 text-white border-white/30">
            GPT-4o Mini
          </Badge>
        </CardTitle>
        <CardDescription className="text-blue-100 text-lg">
          Your AI-powered study companion. Get instant help with any subject or question.
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6 p-6">
        {/* API Key Input */}
        <div className="space-y-3 p-4 bg-gray-50 rounded-lg border">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-blue-100 rounded-full">
              <Key className="w-4 h-4 text-blue-600" />
            </div>
            <span className="text-sm font-semibold text-gray-700">OpenAI API Configuration</span>
          </div>
          <div className="flex gap-3">
            <div className="relative flex-1">
              <Input
                type={showApiKey ? "text" : "password"}
                placeholder="Enter your OpenAI API key (sk-...)"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="pr-12 h-11 border-2 focus:border-blue-500 transition-colors"
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-1 top-1/2 -translate-y-1/2 h-9 w-9 hover:bg-gray-100"
                onClick={() => setShowApiKey(!showApiKey)}
              >
                {showApiKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </Button>
            </div>
            <Button 
              onClick={saveApiKey} 
              variant="outline" 
              className="h-11 px-6 border-2 border-blue-200 hover:border-blue-400 hover:bg-blue-50"
            >
              Save Key
            </Button>
          </div>
          <div className="text-xs text-gray-500 bg-white p-3 rounded border-l-4 border-l-blue-400">
            <span className="font-medium">🔒 Privacy Note:</span> Your API key is stored locally in your browser and never sent to our servers.
            <br />
            <span className="font-medium">Get your key:</span> <a href="https://platform.openai.com/account/api-keys" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">OpenAI Platform →</a>
          </div>
        </div>

        {/* Error Display */}
        {error && (
          <Alert variant="destructive" className="border-red-200 bg-red-50">
            <AlertDescription className="text-red-800">{error}</AlertDescription>
          </Alert>
        )}

        {/* Chat Messages */}
        <div className="border-2 border-gray-200 rounded-xl p-6 min-h-[400px] max-h-[500px] overflow-y-auto bg-gradient-to-b from-white to-gray-50">
          {messages.length === 0 ? (
            <div className="text-center text-gray-500 mt-16">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Start Your AI Conversation</h3>
              <p className="text-sm">Ask me anything about your studies, homework, or any topic!</p>
            </div>
          ) : (
            <div className="space-y-6">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.role === 'assistant' && (
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] p-4 rounded-2xl shadow-sm ${
                      message.role === 'user'
                        ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white'
                        : 'bg-white border border-gray-200'
                    }`}
                  >
                    <div className={`text-xs font-medium mb-2 ${
                      message.role === 'user' ? 'text-blue-100' : 'text-gray-500'
                    }`}>
                      {message.role === 'user' ? 'You' : 'ChatGPT'}
                    </div>
                    <div className="whitespace-pre-wrap leading-relaxed">{message.content}</div>
                  </div>
                  {message.role === 'user' && (
                    <div className="bg-gradient-to-br from-gray-400 to-gray-500 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <User className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-3 justify-start">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-white border border-gray-200 rounded-2xl p-4 max-w-[80%] shadow-sm">
                    <div className="flex items-center gap-3">
                      <Loader2 className="w-5 h-5 animate-spin text-blue-500" />
                      <span className="text-gray-600">ChatGPT is thinking...</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Message Input */}
        <div className="flex gap-3 p-4 bg-gray-50 rounded-xl border-2 border-gray-200">
          <Textarea
            placeholder="Ask me anything about your studies..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
              }
            }}
            className="flex-1 min-h-[80px] border-0 bg-white shadow-sm resize-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading || !apiKey.trim()}
          />
          <div className="flex flex-col gap-2">
            <Button 
              onClick={sendMessage} 
              disabled={isLoading || !inputMessage.trim() || !apiKey.trim()}
              className="h-12 w-12 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <Send className="w-5 h-5" />
              )}
            </Button>
            <Button 
              onClick={clearChat} 
              variant="outline" 
              size="sm"
              disabled={messages.length === 0}
              className="h-10 w-12 text-xs border-2 hover:bg-gray-100"
            >
              Clear
            </Button>
          </div>
        </div>

        {/* Usage Tips */}
        <div className="text-xs text-gray-600 bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border border-blue-200">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span className="font-semibold">Pro Tips:</span>
          </div>
          <div className="grid md:grid-cols-2 gap-2">
            <p><strong>Enter:</strong> Send message</p>
            <p><strong>Shift+Enter:</strong> New line</p>
            <p><strong>Example:</strong> "Explain photosynthesis"</p>
            <p><strong>Example:</strong> "Help with math homework"</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChatGPT;
