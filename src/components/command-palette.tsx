"use client";

import { useState, useEffect, useCallback, useRef, useMemo, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../lib/utils";

export interface CommandItem {
  id: string;
  title: string;
  description?: string;
  icon?: ReactNode;
  category: string;
  action: () => void;
  keywords?: string[];
}

interface CommandPaletteProps {
  className?: string;
  commands: CommandItem[];
  categories?: Record<string, string>;
  placeholder?: string;
  onSearch?: (query: string) => CommandItem[];
  triggerLabel?: string;
  shortcutKey?: string;
}

export function CommandPalette({
  className,
  commands,
  categories = {},
  placeholder = "Search commands...",
  onSearch,
  triggerLabel = "Search",
  shortcutKey = "k",
}: CommandPaletteProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const filteredCommands = useMemo(() => {
    if (!query.trim()) return commands;

    const lowerQuery = query.toLowerCase();
    const filtered = commands.filter((cmd) => {
      const titleMatch = cmd.title.toLowerCase().includes(lowerQuery);
      const descMatch = cmd.description?.toLowerCase().includes(lowerQuery);
      const keywordMatch = cmd.keywords?.some((k) =>
        k.toLowerCase().includes(lowerQuery)
      );
      return titleMatch || descMatch || keywordMatch;
    });

    const searchResults = onSearch ? onSearch(query) : [];
    return [...filtered, ...searchResults];
  }, [query, commands, onSearch]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === shortcutKey) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
        return;
      }

      if (!isOpen) return;

      switch (e.key) {
        case "Escape":
          setIsOpen(false);
          setQuery("");
          break;
        case "ArrowDown":
          e.preventDefault();
          setSelectedIndex((prev) =>
            prev < filteredCommands.length - 1 ? prev + 1 : 0
          );
          break;
        case "ArrowUp":
          e.preventDefault();
          setSelectedIndex((prev) =>
            prev > 0 ? prev - 1 : filteredCommands.length - 1
          );
          break;
        case "Enter":
          e.preventDefault();
          if (filteredCommands[selectedIndex]) {
            filteredCommands[selectedIndex].action();
            setIsOpen(false);
            setQuery("");
          }
          break;
      }
    },
    [isOpen, filteredCommands, selectedIndex, shortcutKey]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [filteredCommands.length]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      setQuery("");
      setSelectedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    if (listRef.current && filteredCommands.length > 0) {
      const selectedElement = listRef.current.querySelector(
        `[data-index="${selectedIndex}"]`
      );
      selectedElement?.scrollIntoView({ block: "nearest" });
    }
  }, [selectedIndex, filteredCommands.length]);

  const groupedCommands = useMemo(() => {
    const groups: Record<string, CommandItem[]> = {};

    filteredCommands.forEach((cmd) => {
      if (!groups[cmd.category]) {
        groups[cmd.category] = [];
      }
      groups[cmd.category].push(cmd);
    });

    return groups;
  }, [filteredCommands]);

  const getCategoryLabel = (category: string) => {
    return categories[category] || category.charAt(0).toUpperCase() + category.slice(1);
  };

  let globalIndex = -1;

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={cn(
          "flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-foreground",
          "bg-muted/50 hover:bg-muted rounded-lg border border-border/50 transition-colors",
          className
        )}
        aria-label="Open command palette"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <span className="hidden sm:inline">{triggerLabel}</span>
        <kbd className="hidden sm:inline-flex h-5 items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium">
          <span className="text-xs">&#x2318;</span>{shortcutKey.toUpperCase()}
        </kbd>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.15 }}
              className="fixed left-1/2 top-[20%] -translate-x-1/2 w-full max-w-xl z-50 px-4"
            >
              <div className="bg-popover border border-border rounded-xl shadow-2xl overflow-hidden">
                <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
                  <svg className="h-5 w-5 text-muted-foreground shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                  <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder={placeholder}
                    className="flex-1 bg-transparent text-base outline-none placeholder:text-muted-foreground"
                  />
                  {query && (
                    <button
                      type="button"
                      onClick={() => setQuery("")}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path d="M18 6 6 18M6 6l12 12" />
                      </svg>
                    </button>
                  )}
                  <kbd className="hidden sm:inline-flex h-5 items-center rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
                    ESC
                  </kbd>
                </div>

                <div
                  ref={listRef}
                  className="max-h-[60vh] overflow-y-auto p-2"
                  role="listbox"
                >
                  {filteredCommands.length === 0 ? (
                    <div className="py-8 text-center text-muted-foreground">
                      <p>No results found for &quot;{query}&quot;</p>
                      <p className="text-sm mt-1">Try searching for something else</p>
                    </div>
                  ) : (
                    Object.entries(groupedCommands).map(([category, cmds]) => {
                      if (cmds.length === 0) return null;

                      return (
                        <div key={category} className="mb-2">
                          <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                            {getCategoryLabel(category)}
                          </div>
                          {cmds.map((cmd) => {
                            globalIndex++;
                            const isSelected = globalIndex === selectedIndex;

                            return (
                              <button
                                key={cmd.id}
                                type="button"
                                data-index={globalIndex}
                                onClick={() => {
                                  cmd.action();
                                  setIsOpen(false);
                                  setQuery("");
                                }}
                                onMouseEnter={() => setSelectedIndex(globalIndex)}
                                className={cn(
                                  "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors",
                                  isSelected
                                    ? "bg-primary/10 text-foreground"
                                    : "text-muted-foreground hover:bg-muted"
                                )}
                                role="option"
                                aria-selected={isSelected}
                              >
                                {cmd.icon && (
                                  <div
                                    className={cn(
                                      "shrink-0 p-1.5 rounded-md",
                                      isSelected ? "bg-primary/20" : "bg-muted"
                                    )}
                                  >
                                    {cmd.icon}
                                  </div>
                                )}
                                <div className="flex-1 min-w-0">
                                  <div className="font-medium text-foreground truncate">
                                    {cmd.title}
                                  </div>
                                  {cmd.description && (
                                    <div className="text-sm text-muted-foreground truncate">
                                      {cmd.description}
                                    </div>
                                  )}
                                </div>
                                {isSelected && (
                                  <svg className="h-4 w-4 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                  </svg>
                                )}
                              </button>
                            );
                          })}
                        </div>
                      );
                    })
                  )}
                </div>

                <div className="px-4 py-2 border-t border-border bg-muted/30">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <kbd className="px-1.5 py-0.5 rounded border bg-muted font-mono">&#x2191;&#x2193;</kbd>
                        navigate
                      </span>
                      <span className="flex items-center gap-1">
                        <kbd className="px-1.5 py-0.5 rounded border bg-muted font-mono">&#x21B5;</kbd>
                        select
                      </span>
                    </div>
                    <span className="flex items-center gap-1">
                      <kbd className="px-1.5 py-0.5 rounded border bg-muted font-mono">esc</kbd>
                      close
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
