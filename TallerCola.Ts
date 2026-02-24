class Queue<T> {
  private items: T[] = [];

  // Agregar elemento al final
  enqueue(item: T): void {
    this.items.push(item);
  }

  // Quitar y devolver el primer elemento
  dequeue(): T | undefined {
    return this.items.shift();
  }

  // Ver el primer elemento sin quitarlo
  peek(): T | undefined {
    return this.items[0];
  }

  // Tamaño de la cola
  size(): number {
    return this.items.length;
  }

  // Verificar si está vacía
  isEmpty(): boolean {
    return this.items.length === 0;
  }
}

class mascota {
    public name: string;
    public edad: number;
    public raza: string;

    constructor(name:string, edad:number, raza:string){
        this.edad = edad;
        this.raza = raza;
        this.name = name;
    }

    getname(): string {
        return this.name
    }
    getedad(): number {
        return this.edad;
    }

    getraza(): string {
        return this.raza;
    }

}

class Veterinaria{
    private queue: Queue<mascota>;

    constructor(queue: Queue<mascota>) {
        this.queue = queue
    }
    simulate(): void {
        while (!this.queue.isEmpty()){
            const mascota = this.queue.dequeue();
            if (mascota){
                console.log(
                    'mascota: ${mascota.getname()} fue removidad'
                );
            }
        }
    }
    }

const queue = new Queue<mascota>();
queue.enqueue(new mascota('Boster', 14, 'Labrador'));
queue.enqueue(new mascota('Tadeo', 5,'Labrador'));
queue.enqueue(new mascota('Firulais', 8,'Chandoso'));
queue.enqueue(new mascota('Curlie', 10,'pug'));
console.log(queue.dequeue()); // 1
console.log(queue.size());    // 1

const simulation = new Veterinaria(queue);

simulation.simulate();
